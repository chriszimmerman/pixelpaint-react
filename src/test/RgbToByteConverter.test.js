import RgbToByteConverter from '../RgbToByteConverter';

it('converts an array of RGB representation strings to an array of bytes', () => {
    const rgbStrings = [
        "#FF00BB",
        "#CC3355"
    ];

    const bytes = [
        0x00, 0xbb, 0x00, 0xff,
        0x00, 0x55, 0x33, 0xcc
    ];

    expect(new RgbToByteConverter().convert(rgbStrings)).toEqual(bytes);
});