
# Taking input from the user
name = input("Enter your your starting coordinate : ")
name2 = input("Enter your your ending  coordinate : ")
deci0=int(input("map confirmation?"))
deci1=int(input("Audio confirmation?"))
deci2=int(input("video confirmation?"))
 
# Output
print("The number of signals between",name,"and",name2,"are 77.53319,12.93861 ;77.52835,12.94573;77.54834,12.9565077.57729;12.9642477.58916,12.98666")
dec=deci0+deci1+deci2
if dec==0:
    print("no ambulance and only traffic flow optimization")
elif dec==1:
    print("might be ambulance , take a confirmation again if the traffic is low else pave way ")
else: 
    print("program to initiate the narrowband-start program has started ")
