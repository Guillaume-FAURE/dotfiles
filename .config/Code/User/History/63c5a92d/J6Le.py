import socket as sk
import time
import matplotlib.pyplot as plt

sumTime=0
minTime=10
maxTime=0
numberMessage=1
UDP_IP = "130.243.124.183"
UDP_PORT = 12345
MESSAGE = "Hello, World!"

for i in range(2000):
    MESSAGE+=f"Hello, World n{i}"


#print("UDP target IP:", UDP_IP)
#print("UDP target port:", UDP_PORT)
#print("message:", MESSAGE)

sock = sk.socket(sk.AF_INET, sk.SOCK_DGRAM) # UDP
    

for i in range (10):
    start_time = time.time()
    sock.sendto(bytes(MESSAGE, "utf-8"), (UDP_IP, UDP_PORT))
    data, addr = sock.recvfrom(65536)
    print(f"{numberMessage} received message from:", addr)
    currentTime=float("{:.5f}".format(time.time()-start_time))
    if (currentTime<minTime):
        minTime=currentTime
    if (currentTime>maxTime):
        maxTime=currentTime
    sumTime+=currentTime
    averageTime=float("{:.5f}".format(sumTime/numberMessage))
    numberMessage+=1
    
print(f"{numberMessage} : minTime : {minTime} maxTime : {maxTime} averageTime: {averageTime}")

arrayBandwidth = [130, 100, 75, 45, 30, 20, 10,7, 5, 1]
arrayTime = [0.007, 0.010, 0.012, 0.015, 0.022, 0.032, 0.058, 0.082, 0.112, 0.546]
plt.xlabel("Bandwidth (MB/s)")
plt.ylabel("time of response")
plt.plot(arrayBandwidth, arrayTime, color="red")
plt.show()