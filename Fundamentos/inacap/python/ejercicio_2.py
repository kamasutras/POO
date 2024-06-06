print("Bienvenidos al calificador")

nota1 = float(input("Nota 1 -> "))
nota2 = float(input("Nota 2 -> "))
nota3 = float(input("Nota 3 -> "))
nota4 = float(input("Nota 4 -> "))
nota5 = float(input("Nota 5 -> "))

operacion = nota1 + nota2 + nota3 + nota4 + nota5 
promedioFinal = operacion/5

print(f"Tu promedio final es: {promedioFinal}")

if promedioFinal >= 4.0:
    print("Felicidades has calificado :)")
else:
    print("Lo siento has reprobado :(")


