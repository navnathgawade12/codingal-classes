def jeff(a,b,c,d,e,f):
    print("function is running")
    return a+b+c+d+e+f

ans = jeff(312,53,4565,8398,35,737)

print(ans)

def caseoh(l,m,n,o,p,q):
    print("functin is walking")
    return l+m+n+o+p+q

solution = caseoh(983,6773,8924,34,7578,16)

print(solution)

def print_decreasing(n):
    #base condition
    if n == 0:
        return
    print(n)
    print_decreasing(n-1)

print_decreasing(3)