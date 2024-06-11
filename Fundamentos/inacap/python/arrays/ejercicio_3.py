medallas = {}

while True:
    print("Registro de Medallas - Juegos Panamericanos\n")
    print("1. Registrar país y medalla")
    print("2. Mostrar medallas")
    print("3. Salir")
    
    opcion = input("Seleccione una opción: ")
    
    if opcion == "1":
        pais = input("Ingrese el país: ")
        tipo_medalla = input("Ingrese el tipo de medalla (oro, plata, bronce): ").lower()
        
        medallas.setdefault(pais, {"oro": 0, "plata": 0, "bronce": 0})
        medallas[pais][tipo_medalla] = medallas[pais].get(tipo_medalla, 0) + 1
        
    elif opcion == "2":
        for pais, med in medallas.items():
            total_medallas = sum(med.values())  # Sumar la cantidad total de medallas de cada país
            print(f"{pais}: Oro - {med['oro']}, Plata - {med['plata']}, Bronce - {med['bronce']}. Total de medallas: {total_medallas}")
    
    elif opcion == "3":
        break
    
    else:
        print("Opción no encontrada, vuelva a intentarlo")

print("Aplicación terminada.")
