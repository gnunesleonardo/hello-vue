const getLocalInfo = async () => {
    const url = 'http://ip-api.com/json/';
    let ret = await fetch(url, {
        mehtod: 'GET'
    });
    let localInfo = await ret.json();
    return localInfo;
}

const getLocalHello = async (countryCode='BR') => {
    const url = `https://fourtonfish.com/hellosalut/?cc=${countryCode}`;
    let ret = await fetch(url, {
        method: 'GET'
    });
    let localHello = await ret.json();
    return localHello;
}

var app = new Vue({
    el: '#app',
    data: {
        hello: '',
    },
    async mounted() {
        let { countryCode } = await getLocalInfo();
        let { hello } = await getLocalHello(countryCode);
        this.hello = hello;
    }
});