import socket as sk
import time
import numpy as np
import matplotlib.pyplot as plt


UDP_IP = "130.243.124.183"
UDP_PORT = 12345

sock = sk.socket(sk.AF_INET, sk.SOCK_DGRAM) # UDP
arrayTime = []
arrayNumberMessage = []
for i in range(1, 2000, 50):
    sumTime=0
    minTime=10
    maxTime=0
    MESSAGE = "Hello, World!"
    for k in range(i):
        MESSAGE+=f"Hello, World n{i}"
    for j in range (50):
        start_time = time.time()
        sock.sendto(bytes(MESSAGE, "utf-8"), (UDP_IP, UDP_PORT))
        data, addr = sock.recvfrom(65536)
        #print(f"{numberMessage} received message from:", addr)
        currentTime=time.time()-start_time
        if (currentTime<minTime):
            minTime=currentTime
        if (currentTime>maxTime):
            maxTime=currentTime
        sumTime+=currentTime
        averageTime=sumTime/50
    arrayTime.append(averageTime)
    arrayNumberMessage.append(i)
    print(f"{i} : minTime : {minTime} maxTime : {maxTime} averageTime: {averageTime}")
plt.plot(arrayNumberMessage, arrayTime, color="red")
plt.show()


#print("UDP target IP:", UDP_IP)
#print("UDP target port:", UDP_PORT)
#print("message:", MESSAGE)


    


    

