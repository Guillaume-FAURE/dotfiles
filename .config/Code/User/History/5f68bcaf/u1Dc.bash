#!/bin/bash

function extractSentenceTextLineXML {
    base="$(basename -s .xml $1)"
    sentenceFile=${base}sentences.xml
    npm-recursive-install $malin/src/parseXML
    tsc -p $malin/src/parseXML 
    node $malin/src/parseXML/dist/improveXML.js $1
    node $malin/src/parseXML/dist/indexExtraction.js -x $1 -p -s -w -o ./
    xmllint --format $sentenceFile --output doc.xml 
    mv -f doc.xml $sentenceFile
}

function linting {
    echo 'Linting xml and svg in progress...'
    for i in *.xml
	do 
	xmllint --format $i > doc.tmp && mv -f doc.tmp $i
	done
    rm -f doc.tmp
}

function independentDirectory {
    echo 'Create and enter safe directory...'
    mkdir tempDir
    cp $1 tempDir
    cd tempDir
}

function pdfAlto {
    echo 'Pdfalto en cours...'
	docker run -ti -u $(id -u):$(id -g) --rm -v $(pwd):/app ponso/pdfalto:0.4 -fullFontName $1
    tsc -p $malin/src/parseXML
    node $malin/src/parseXML/dist/improveXML.js $base.xml
}

function configurationJSfile {
    echo 'Configure and clean XML in progress...'
    echo "$malin/src/annotationManuals/JSconfigurationFiles/setCoorSVG.js"
    npm-recursive-install $malin/src/annotationManuals
	node $malin/src/annotationManuals/JSconfigurationFiles/setCoorSVG.js $base.xml $base.xml_data/*.svg
	node $malin/src/annotationManuals/JSconfigurationFiles/rmParasiteImages.js $base.xml_data/*.svg
}

function extractFont {
    echo 'Extract font in progress...'
	mutool extract $1 > /dev/null
	convertFonttoOTF *.otf
    convertFonttoOTF *.cff
    convertFonttoOTF *.ttf
    rm -f *.ttf *.cff *.pam *.png *.jpg
    mkdir font
    mv *.otf font
}

function convertFonttoOTF {
	fontforge -lang=ff -c 'i=1
format = ".otf"
while ( i<$argc )
  	Open($argv[i])
	Print($argv[i])
  	Generate($fontname + format)
  	i = i+1
endloop
Print(" Conversion termine des fonts au format .otf")' $@ > /dev/null 2>&1
}

function imagesFilter {
    echo 'Analyse images in imagesdoc.xml...'
    # class image by type
    # only png are considered
    # default directory is opmanual.xml_data
    JSFILE="images.json"
    echo "{ \"namePdf\":\"$base\"," >$JSFILE
    ARRAY_IMAGES=$(ls $1/*.png)
    LAST_ELEMENT="$(ls $1/*.png | tail -n 1)"
    for i in $ARRAY_IMAGES;
    do 
        echo $i;    
        type=`identify -verbose $i |grep Type |cut -d: -f2`
        echo "\"$i\":\"$type\"," >>$JSFILE
    done
    echo "\"endOfFile\":\"\"" >>$JSFILE
    echo "}" >>$JSFILE
    echo "written in $JSFILE"
}

function fullCleaning {
    echo 'Cleaning...'
    echo $(pwd)/$base
    mv $base.xml_data images_$base
    mkdir $DIR
    # Redirect the error of mv $DIR into $DIR to /dev/null
	mv * $DIR > /dev/null 2>&1
    mv $DIR ../generatedManuals
    cd ..
    rmdir tempDir
}

function generateXML {
    npm-recursive-install $malin/src/parseXML
    node $malin/src/parseXML/dist/indexExtraction.js $1
    echo ${base}sentences.xml
    xmllint --format ${base}sentences.xml > doc.xml && mv -f doc.xml ${base}sentences.xml
}

function generateStaticHTML {
    npm-recursive-install $malin/src/annotationManuals/
    tsc -p $malin/src/annotationManuals/ && node $malin/src/annotationManuals/dist/staticFront.js $1
}

function generateSectionXML {
    base="$(basename -s sentences.xml $1)"
    sentenceMacrosFile=${base}sentencesmacros.xml
    echo $sentenceMacrosFile
    npm-recursive-install $malin/src/parseXML
    tsc -p $malin/src/parseXML  && node $malin/src/parseXML/dist/indexExtraction.js -x $1 -m -w -o ./
    xmllint --format $sentenceMacrosFile --output doc.xml 
    mv -f doc.xml $sentenceMacrosFile 
}

function generateSectionHTML {
    npm-recursive-install $malin/src/annotationManuals/
    tsc -p $malin/src/annotationManuals/ && node $malin/src/annotationManuals/dist/sectionStaticFront.js $1
}

function htmlToXml {
    npm-recursive-install $malin/src/annotationManuals/
    tsc -p $malin/src/annotationManuals/
    node $malin/src/annotationManuals/dist/htmlToXml.js $1 $2
}


base="$(basename -s .pdf $1)"
echo 'Research of the directory malin in your home...'
# malin="$(find ~ -depth -name malin -print -quit)"
if [[ -z "${MALIN_ROOT}" ]]; then
echo 'set env variable $MALIN_ROOT'
exit 1
else
malin=$MALIN_ROOT
fi
echo "Dossier malin : $malin"
DIR="doc$base"
arg="${@:2}"
if [[ $arg == *"-ed "* || $arg == *"-ed" || $arg == *"--enterDirectory"* ]]; then
    independentDirectory $1
fi
if [[ $arg == *"-cl "* || $arg == *"-cl" || $arg == *"--cleaning"* ]]; then
    fullCleaning
fi
if [[ $arg == *"-ef "* || $arg == *"-ef" || $arg == *"--extractFont"* ]]; then
    extractFont $1
fi
if [[ $arg == *"-ep "* || $arg == *"-ep" || $arg == *"--extractPdf"* ]]; then
    pdfAlto $1
fi
if [[ $arg == *"-l "* || $arg == *"-l" || $arg == *"--linting"* ]]; then
    linting
    configurationJSfile
fi
if [[ $arg == *"-if "* || $arg == *"-if" || $arg == *"--imagesFilter"* ]]; then
    imagesFilter $1
fi
if [[ $arg == *"-es "* || $arg == *"-es" ||  $arg == *"--extractSentence"* ]]; then
    extractSentenceTextLineXML $1
fi
if [[ $arg == *"-gh "* || $arg == *"-gh" ||  $arg == *"--generateHTML"* ]]; then
    generateStaticHTML $1
fi
if [[ $arg == *"-gsx "* || $arg == *"-gsx" ||  $arg == *"--generateSection"* ]]; then
    generateSectionXML $1
fi
if [[ $arg == *"-gsh "* || $arg == *"-gsh" ||  $arg == *"--generateSectionHTML"* ]]; then
    generateSectionHTML $1
fi
if [[ $arg == *"-htx "* || $arg == *"-htx" ||  $arg == *"--htmlToXml"* ]]; then
    htmlToXml $1 $2
fi
if [[ $arg == *"-g "* || $arg == *"-g" || $arg == *"--global"* ]]; then
    independentDirectory $1
    pdfAlto $base.pdf
    extractFont $base.pdf
    linting
    configurationJSfile
    imagesFilter $base.xml_data
    extractSentenceTextLineXML $base.xml
    generateStaticHTML ${base}sentences.xml
    linting
    fullCleaning
fi
