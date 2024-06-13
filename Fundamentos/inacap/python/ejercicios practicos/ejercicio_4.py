for i in range(1, 6):
    alumno = str(input(f"Ingrese nombre del alumno {i} -> "))
    promedio = float(input(f"Ingrese promedio final de {alumno} -> "))
    
    if promedio >= 4.0:
        print(f"¡Felicitaciones! El alumno {alumno} ha aprobado el curso.")
    else:
        print(f"Lo sentimos, el alumno {alumno} ha reprobado el curso.")
