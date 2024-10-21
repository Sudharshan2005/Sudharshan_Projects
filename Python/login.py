u = input("Enter your username: ")
u_dict = {}
dic_v = True
uv = True
if u in u_dict :
    print("Username Already Exist")
    exit(0)
if not 8 <= len(u) <= 20 :
    uv = False
c_count = 0
u_count = 0
d_count = 0
for i in u :
    if i == '#' or i == '$' :
        c_count += 1
    elif i.isupper() :
        u_count += 1
    elif i.isdigit() :
        d_count += 1
    elif i.isalpha() :
        pass
    else :
        uv = False

if uv and c_count > 0 and u_count > 0 and d_count > 0 :
    print("Valid username")
else :
    print("Invalid Username")
    exit(0)

p = input("Enter your password: ")
pv = True
if len(p) < 8 :
    pv = False
char = ["!","%","^","~"]
char_count = 0
for i in p :
    if i in char :
        char_count += 1
i = 0
while i <= len(p) :
    if i == len(p) - 4 :
        break
    if p[i] == p[i+1] == p[i+2] == p[i + 3] :
        pv = False
    i += 1
if pv and char_count > 0 :
    cp = input("Re-enter the password: ")
    if cp == p :
        print("Valid password")
else :
    print("Invalid Password")
    exit(0)
if uv and pv :
    print("User Registered Successfully!!!")
    u_dict[u] = p

l = input("Do you want to continue to login (y or n): ")
choice = ["yes","no","n","y"]
if l.lower() in choice :
    un = input("Enter your username: ")
    if un not in u_dict :
        print("Username does not exist")
        exit(0)
    else :
        pe = input("Enter your password: ")
        if pe == u_dict[un] :
            print("You are Successfully logged in")
        else :
            print("Entered wrong password")