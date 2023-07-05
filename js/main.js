function cssShadow({
    font_size,
    x_axis,
    y_axis,
    blur,
    opacity,
    color,
    rgba
}) {
    let cssStyles = x_axis + 'px ' + y_axis + 'px ' + blur + 'px ' + rgba;
    $('h1').css('text-shadow', cssStyles);
    $('#resultHex').val('background-color: ' + color +
        ';\nopacity: ' + opacity +
        ';\nfont-size: ' + font_size + 'px;');
    $('#resultRGBA').val('text-shadow: ' + x_axis + 'px '
        + y_axis + 'px '
        + blur + 'px '
        + rgba + ';\nfont-size: '
        + font_size + 'px;');
}

cssShadow({
    font_size: 40,
    x_axis: 4,
    y_axis: -1,
    blur: 0,
    opacity: 1,
    color: '#808080',
    rgba: 'rgba(128, 128, 128, 1)'
});

$(document).on('input change', 'input', function () {
    let font_size = $('#font_size').val();
    let x_axis = $('#x_axis').val();
    let y_axis = $('#y_axis').val();
    let blur = $('#blur').val();
    let opacity = $('#opacity').val();
    let color = $('input[type=color]').val() + '';
    let red16 = color[1] + color[2];
    let green16 = color[3] + color[4];
    let blue16 = color[5] + color[6];
    let red10 = parseInt(red16, 16);
    let green10 = parseInt(green16, 16);
    let blue10 = parseInt(blue16, 16);
    let rgba = `rgba(${red10}, ${green10}, ${blue10}, ${opacity})`;

    $('h1').css('fontSize', font_size + 'px');
    cssShadow({
        font_size: font_size,
        x_axis: x_axis,
        y_axis: y_axis,
        blur: blur,
        opacity: opacity,
        color: color,
        rgba: rgba,
    });
});