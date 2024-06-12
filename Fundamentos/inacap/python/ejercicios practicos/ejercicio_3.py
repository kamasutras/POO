acumuladorNotas = 0
for i in range(1,6,1) :
    nota = float(input(f"Ingrese nota {i}-> "))
    acumuladorNotas = acumuladorNotas + nota

    promedio = acumuladorNotas / 5 

print(f"Promedio final: {promedio}")

if promedio >= 4.0:
    print("Felicitaciones has aprovado el curso")
else:
    print("Lamentablemente has reprovado el curso, vuelva a intentarlo")