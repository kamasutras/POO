cantidadNotas = int(input("Cuantas notas quieres agregar? -> "))
notas = []
for i in range(cantidadNotas):
    nota = float(input(f"Ingresa la nota {i+1} -> "))
    notas.append(nota)
print(f"Finalización de la lectura de notas...\n")
acumNotas = sum(notas)
promedio = acumNotas / len(notas)


notaMasAlta = max(notas)
notaMasBaja = min(notas)



print(f"\n\nnInforme de Calificaciones:")
print(f"Tienes {cantidadNotas} notas y son las siguientes: {notasOrdenadas}")
print(f"Promedio Final: {promedio:.1f}")

print(f"\nCalificación más alta: {notaMasAlta}")
print(f"Calificación más baja: {notaMasBaja}")
