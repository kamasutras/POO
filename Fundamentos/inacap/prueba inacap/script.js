$(document).ready(function () {
    // Manejo del formulario de ingreso de calificaciones
    $('#gradeForm').submit(function (event) {
        event.preventDefault();
        var studentName = $('#studentName').val();
        var subject = $('#subject').val();
        var grade = $('#grade').val();
        $('#gradeTable tbody').append('<tr><td>' + studentName + '</td><td>' + subject + '</td><td>' + grade + '</td></tr>');
        // Aquí se añadiría la lógica para guardar las calificaciones en la base de datos
    });
});

