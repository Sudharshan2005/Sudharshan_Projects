import random

voters_kmit = {2001:["a",19,"Male"],2002:["b",20,"Male"],2003:["c",21,"Female"],2004:["d",22,"Male"],2005:["e",23,"Female"],2006:["f",23,"Male"],2007:["g",24,"Male"],2008:["h",25,"Female"],2009:["i",26,"Male"],2010:["j",27,"Female"]}
voters_kmec = {4001:["k",19,"Male"],4002:["l",20,"Male"],4003:["m",21,"Female"],4004:["n",22,"Male"],4005:["o",23,"Female"],4006:["p",23,"Male"],4007:["q",24,"Male"],4008:["r",25,"Female"],4009:["t",26,"Male"],4010:["u",27,"Female"]}
voters_ngit = {6001:["v",19,"Male"],6002:["w",20,"Male"],6003:["x",21,"Female"],6004:["y",22,"Male"],6005:["z",23,"Female"],6006:["ab",23,"Male"],6007:["cd",24,"Male"],6008:["ef",25,"Female"],6009:["gh",26,"Male"],6010:["ij",27,"Female"]}
candidate_kmit = {"!":"Cand1","@":"Cand2","#":"Cand3","$":"Cand4","%":"Cand5"}
candidate_kmec = {"^":"Cand1","&":"Cand2","*":"Cand3","~":"Cand4","`":"Cand5"}
candidate_ngit = {"<":"Cand1",">":"Cand2","/":"Cand3","?":"Cand4","|":"Cand5"}
votes_kmit = {"!":0,"@":0,"#":0,"$":0,"%":0}
votes_kmec = {"^":0,"&":0,"*":0,"~":0,"`":0}
votes_ngit = {"<":0,">":0,"/":0,"?":0,"|":0}


def printing_details(voters_dic) :
    print("\nDetails of Voter:\nName of the Voter: {}\nAge of the Voter: {}\nGender of the Voter: {}".format(voters_dic[id][0],voters_dic[id][1],voters_dic[id][2]))

def printing_candidates(candidate_dic) :
    i = 0
    for key,value in candidate_dic.items() :
        i += 1
        print("{}. cand : {}  party : {}".format((i),value,key))

def printing_vote(cand_dict) :
    print("You have Successfully voted for {}({})".format(list(cand_dict.values())[vote-1],list(cand_dict.keys())[vote-1]))
    print("Thank You...\n")

def vote_count(votes_dic) :
    fl = list(votes_dic.keys())
    fv = list(votes_dic.values())
    w = fl[fv.index(max(fv))]
    return w


count = 1
while count <= 5 :
    con = int(input("Enter Your constitiuency (1.KMIT 2.KMEC 3.NGIT): "))
    c = input("Do You have voter id (yes / no) : ")
    if c == 'no' :
        name = input("Enter your name: ")
        age = int(input("Enter your age: "))
        if age < 18 :
            print("You are not eligible to vote..")
            continue
        gen = input("Enter your gender (Male / Female): ")
        if con == 1 :
            id = random.randint(2011,4000)
            voters_kmit[id] = [name,age,gen]
        elif con == 2 :
            id = random.randint(4011,6000)
            voters_kmec[id] = [name,age,gen]
        elif con == 3 :
            id = random.randint(6011,8000)
            voters_ngit[id] = [name,age,gen]
        else :
            print("Enter proper constituency...")
            continue
        print("Your voter ID is:",id)
    else :
        id = int(input("Enter your Voter ID: "))
        if 2000 < id < 4000 and con == 1 :
            if id not in voters_kmit :
                print("Voter Id does not exist...")
                continue
            printing_details(voters_kmit)
        elif 4000 < id < 6000 and con == 2 :
            if id not in voters_kmec :
                print("Voter Id does not exist...")
                continue
            printing_details(voters_kmec)
        elif 6000 < id < 8000 and con == 3 :
            if id not in voters_ngit :
                print("Voter Id does not exist...")
                continue
            printing_details(voters_ngit)
        else :
            print("!!!Voter Does not belongs to this Constituency!!!")
            continue
    if con == 1 :
        print("\nWelcome To KMIT constituency\n##### Candidate List #####")
        printing_candidates(candidate_kmit)
    elif con == 2 :
        print("\nWelcome To KMEC constituency\n##### Candidate List #####")
        printing_candidates(candidate_kmec)
    elif con == 3 :
        print("\nWelcome To NGIT constituency\n##### Candidate List #####")
        printing_candidates(candidate_ngit)

    vote = int(input("\nEnter 1/2/3/4/5 to vote for Candidate: "))
    if con == 1 :
        printing_vote(candidate_kmit)
        if vote == 1 :
            votes_kmit["!"] += 1
        elif vote == 2 :
            votes_kmit["@"] += 1
        elif vote == 3 :
            votes_kmit["#"] += 1
        elif vote == 4 :
            votes_kmit["$"] += 1
        elif vote == 5 :
            votes_kmit["%"] += 1
    elif con == 2 :
        printing_vote(candidate_kmec)
        if vote == 1 :
            votes_kmec["^"] += 1
        elif vote == 2 :
            votes_kmec["&"] += 1
        elif vote == 3 :
            votes_kmec["*"] += 1
        elif vote == 4 :
            votes_kmec["~"] += 1
        elif vote == 5 :
            votes_kmec["`"] += 1
    elif con == 3 :
        printing_vote(candidate_ngit)
        if vote == 1 :
            votes_ngit["<"] += 1
        elif vote == 2 :
            votes_ngit[">"] += 1
        elif vote == 3 :
            votes_ngit["/"] += 1
        elif vote == 4 :
            votes_ngit["?"] += 1
        elif vote == 5 :
            votes_ngit["|"] += 1

    count += 1

w_kmit = vote_count(votes_kmit)
print("\nWinner of KMIT Constituency is {}({}) with {} votes.".format(candidate_kmit[w_kmit],w_kmit,votes_kmit[w_kmit]))
print(list(votes_kmit.items()))
w_kmec = vote_count(votes_kmec)
print("\nWinner of KMEC Constituency is {}({}) with {} votes.".format(candidate_kmec[w_kmec],w_kmec,votes_kmec[w_kmec]))
print(list(votes_kmec.items()))
w_ngit = vote_count(votes_ngit)
print("\nWinner of NGIT Constituency is {}({}) with {} votes.".format(candidate_ngit[w_ngit],w_ngit,votes_ngit[w_ngit]))
print(list(votes_ngit.items()))