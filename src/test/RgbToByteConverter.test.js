import RgbToByteConverter from '../RgbToByteConverter';

it('converts an array of RGB representation strings to an array of bytes', () => {
    const rgbStrings = [
       {color: "#FF00BB"},
       {color: "#CC3355"}
    ];

    const bytes = [
        0x00, 0xbb, 0x00, 0xff,
        0x00, 0x55, 0x33, 0xcc
    ];

    expect(new RgbToByteConverter().convert(rgbStrings)).toEqual(bytes);
});