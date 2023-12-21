export const formatDate = (date) => {
    var hours = new Date(date).getHours();
    var minutes = new Date(date).getMinutes();
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours + 12;
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const downloadMedia = (e, originalImage) => {
    e.preventDefault();
    try {
        fetch(originalImage)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                const duplicateName = originalImage.split('/').pop();
                a.download = "" + duplicateName + "";

                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url)
            }).catch(error => console.log('Error while downloading file', error.message))
    } catch (error) {
        console.log('Error while downloading file', error.message)
    }
}