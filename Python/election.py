import random

voters = {2001:["a",19,"Male"],2002:["b",20,"Male"],2003:["c",21,"Female"],2004:["d",22,"Male"],2005:["e",23,"Female"],2006:["f",23,"Male"],2007:["g",24,"Male"],2008:["h",25,"Female"],2009:["i",26,"Male"],2010:["j",27,"Female"]}
candidate = {"!":"Cand1","@":"Cand2","#":"Cand3","$":"Cand4","%":"Cand5"}
votes = {"!":0,"@":0,"#":0,"$":0,"%":0}

count = 1
while count <= 5 :
    c = input("\nDo You have voter id (yes / no) : ")
    if c == 'no' :
        name = input("Enter your name: ")
        age = int(input("Enter your age: "))
        if age < 18 :
            print("You are not eligible to vote..")
            continue
        gen = input("Enter your gender (Male / Female): ")
        id = random.randint(2011,9000)
        print("Your voter ID is:",id)
        voters[id] = [name,age,gen]
    else :
        id = int(input("Enter your Voter ID: "))
        if 2000 < id < 9000 :
            if id not in voters :
                print("Voter Id does not exist...")
                continue
        else :
            print("!!!Voter Does not belongs to this Constituency!!!")
            continue
    print("\nDetails of Voter:\nName of the Voter: {}\nAge of the Voter: {}\nGender of the Voter: {}".format(voters[id][0],voters[id][1],voters[id][2]))
    print("\nWelcome To KMIT constituency\n##### Candidate List #####")
    i = 0
    for key,value in candidate.items() :
        i += 1
        print("{}. cand : {}  party : {}".format((i),value,key))

    vote = int(input("\nEnter 1/2/3/4/5 to vote for Candidate: "))
    print("You have Successfully voted for {}({})".format(list(candidate.values())[vote-1],list(candidate.keys())[vote-1]))
    print("Thank You...")
    if vote == 1 :
        votes["!"] += 1
    elif vote == 2 :
        votes["@"] += 1
    elif vote == 3 :
        votes["#"] += 1
    elif vote == 4 :
        votes["$"] += 1
    elif vote == 5 :
        votes["%"] += 1

    count += 1

fl = list(votes.keys())
fv = list(votes.values())
w = fl[fv.index(max(fv))]
print("\nWinner of This Constituency is {}({}) with {} votes.".format(candidate[w],w,votes[w]))
print(list(votes.items()))