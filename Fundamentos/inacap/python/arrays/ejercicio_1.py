# Manejo de listas

cantidadNotas = int(input("Cuantas notas quieres agregar? -> "))
notas = [0] * cantidadNotas 


for i in range(0, cantidadNotas, 1):
    
    notas[i] = float(input(f"Ingresa la nota  {i+1}-> "))
else:
    print(f"Finalizacion de la lectura de notas...\n\n\n")

    
    acumNotas = 0
    for i in range(len(notas)):
        acumNotas = acumNotas + notas[i]
        promedio = acumNotas / len(notas)
        
        
        print(f"tienes {cantidadNotas} notas y son las siguientes: {notas}")
        print(f"\n\n\nPromedio Final:  {promedio}")
        
        