import React from 'react';
import PropTypes from 'prop-types';
import RgbToByteConverter from './RgbToByteConverter';

class ImageExportButton extends React.Component {
    exportImage = () => {
        const imageBytes = new RgbToByteConverter().convert(this.props.pixels);
        const imageData = {
            data: imageBytes,
            height: this.props.dimension,
            width: this.props.dimension
        };

        const promptDownload = (_) => {
            const anchorTag = document.createElement('a');
            anchorTag.href = '/image.bmp';
            anchorTag.download = 'image.bmp';
            document.body.appendChild(anchorTag);
            anchorTag.click();
            document.body.removeChild(anchorTag);
        };

        const postRequest = {
            method: 'POST',
            body: JSON.stringify(imageData),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        };

        fetch('/save', postRequest).then(promptDownload);
    }

    render() {
        return (
            <button onClick={this.exportImage}>Export Image</button>
        );
    }
}

export default ImageExportButton;

ImageExportButton.propTypes = {
    pixels: PropTypes.arrayOf(PropTypes.shape({color: PropTypes.string})).isRequired,
    dimension: PropTypes.number.isRequired
};