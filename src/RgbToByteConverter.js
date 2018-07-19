class RgbToByteConverter {
    convert = (pixels) => {
        const bytes = [];

        pixels.forEach((pixel) => {
            const rgbString = pixel.color;
            const alpha = 0x00;
            const blue = parseInt(`0x${rgbString[5]}${rgbString[6]}`);
            const green = parseInt(`0x${rgbString[3]}${rgbString[4]}`);
            const red = parseInt(`0x${rgbString[1]}${rgbString[2]}`);

            bytes.push(alpha);
            bytes.push(blue);
            bytes.push(green);
            bytes.push(red);
        });

        return bytes;
    }
}

export default RgbToByteConverter;