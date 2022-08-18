const form = document.getElementById("form");
const qrcode = document.getElementById("qrcode");

const generate = (url, option) => {
  new QRCode("qrcode", {
    text: url,
    width: option,
    height: option,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
};




const onSubmit = (e) => {
    e.preventDefault();
    
    clearUi()

  const url = document.getElementById("url").value;
  const option = document.getElementById("option").value;
    generate(url, option);

        setTimeout(() => {
            const sourceUrl = qrcode.querySelector('img').src
            createDownloadBtn(sourceUrl)
        },50)
};

const createDownloadBtn = (srcUrl) => {
    const download = document.createElement('a')
download.download = 'qr code'
download.href = srcUrl
download.innerHTML = "Download"
download.classList = `w-1/4 p-2 text-center text-2xl font-bold bg-[#6735EE] rounded mt-3 mb-3 cursor-pointer`
download.id = 'download'
qrcode.appendChild(download)
}

const clearUi = () => {
    qrcode.innerHTML = ''
}

form.addEventListener("submit", onSubmit);
