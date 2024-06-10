numero = int(input("Escriba un numero para imprimir su tabla -> "))
for n in range(1,13):
    print(f'{numero} X {n} = {numero*n}')

#opcion = str(input("Desea obtener otra tabla? [s/n]  "))

resp = 's'
while resp  == 's' : 
    resp =  input('Deseas imprimir un nuevo valo de x [s/n]: ')

