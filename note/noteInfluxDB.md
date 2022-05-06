#Notes

ciblé entreprise
service gratuit que pour 30 jours
demande flux
with notebooks we can explore data from bucket which are sort of database
possibilite de voir la data en graph permettant une analyse complete plus efficace
realtime application
librairy compatible with a lot of language
care if too many requests
grosse documentation mais helas peu clair d'apres moi des qu'on veut s'eloigner de l'interface graphique
task parfois longue, rendant les tests eprouvants
Souvent besoin de s'appuyer sur de la documentation alternative plus clair que la documentation officiel

#Presentation

InfluxData is the company behind InfluxDB and Telegraf.
InfluxDB, released in 2013, is the best time series database available for storing metrics and sensing data. It has since evolved into a full blown time series application development platform used by thousands of developers to create; customer facing IoT, server monitoring, financial applications, bespoke monitoring applications for thousands of servers and devices, and many many other applications.
InfluxDB also includes the InfluxDB User Interface (InfluxDB UI) and Flux. The InfluxDB UI is a time series management, visualization, and dashboarding tool. It also offers a script editor for Flux. Flux is a functional scripting and query language that enables data processing tasks like sophisticated data transformation and alerting.

Telegraf is the open source server agent for collecting metrics and events. Telegraf is plugin driven and compiles into a single binary. There is a huge collection of input, output, aggregator, and parser plugins that enable developers to collect data, apply transformations to it, and write it to the destination datastore of their choice.

If you are thinking about creating an application related to time stamped data (IoT, Sensor Monitoring, Server Monitoring, Finance, etc…), InfluxDB is the easiest and most powerful development platform for you.

Il existe 2 versions d'InfluxDB, InfluxDB OSS, la version Open Source, gratuite, que nous allons utiliser, ainsi qu'InfluxDB-Cloud, la version demandant un compte InfluxDB.
Il convient d'ajouter que la version Open Source est sous forme de package sur toutes les distributions principales Linux (les tests ont été effectué sous Vanilla Arch-Linux).

Une API uniforme permet de passer d'une version à l'autre sans problème.

L'utilité principale d'InfluxDB que nous allons voir sur l'UI est de write et query la data (beaucoup d'angliscisme du au monde informatique).

InfluxDB fonctionne sous forme d'organisation et de buckets, une organisation est simplement un groupe de bucket qui sera souvent une entreprise ou une partie d'entreprise, un bucket est une base de donnée dans lequel est stocké des données venant le plus souvent de fichier csv.

## Write data

```
import "experimental/csv"

relativeToNow = (tables=<-) =>
  tables
    |> elapsed()
    |> sort(columns: ["_time"], desc: true)
    |> cumulativeSum(columns: ["elapsed"])
    |> map(fn: (r) => ({ r with _time: time(v: int(v: now()) - (r.elapsed * 1000000000))}))

csv.from(url: "https://influx-testdata.s3.amazonaws.com/noaa.csv")
  |> relativeToNow()
  |> to(bucket: "noaa", org: "local-company")
```
```error
runtime error @12:6-12:46: to: open /home/epistelmoz/.influxdbv2/engine/data/faabdfa4cd68dee4/_series/01: too many open files
```
limit 10MB with OS free software
Flux and the Task Engine
Flux is a functional query and scripting language. Flux enables you to:

Transform and analyze data.
Write Tasks
Flux has a Javascript inspired syntax that makes it easily composable and readable. Pipe-forward operators separate function calls and make data transformations flow smoothly. Flux is Open Source, testable, shareable, and contributable.

The Task Engine executes Flux scripts on a schedule. It allows you to:

Process data to make visualizations screaming fast
Get alerted if your data stops writing or breaches certain thresholds
Periodically call an external service with data from InfluxDB
The Task engine can tackle all the above points with no additional code or operations on your part.

unexpected error in CLI or in the UI with simple task
ca write pas

InfluxDB as every tool to visualize measurement over time will take time serie data as input, in time serie data, the absisse axis will always be time
we can have regular vs irregular TSD (Time Serie Data)

Why choose InfluxDB ?
	easy to start with
	familiar query syntax
	no external dependencies
	allow for regular and irregular TSD
	horizontally scalable
	member of a cohesive time series platform

Measurement : what we measure, what the graph show
Tag : Parameters, what town, what gender
tagset = collection of all the tags
field = y axis value, the value we measure
fieldset = collection of all the field
timestamp = x axis
measurement + tagset = series
measurement +tagset + timestamp = a point

CLI: faster, more option, more information, present everywhere
