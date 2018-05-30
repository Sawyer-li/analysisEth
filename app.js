var $ = require('axios');
var Web3 = require('web3');
let web3;
web3 = new Web3(new Web3.providers.HttpProvider('http://192.168.1.25:8545'));
//http://api.etherscan.io/api?module=contract&action=getabi&address=0xfb6916095c    a1df60bb79ce92ce3ea74c37c5d359

//我得ethscan api
//A5FT8AKBXR76E9IVQRAY9DGC797R3BVEC5

//获得一个帐号里面的交易
//http://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&sort=asc&apikey=A5FT8AKBXR76E9IVQRAY9DGC797R3BVEC5

//获取一个合约下的所有交易
//http://api.etherscan.io/api?module=account&action=tokentx&address=0x4e83362442b8d1bec281594cea3050c8eb01311c&startblock=0&endblock=999999999&sort=asc&apikey=YourApiKeyToken

//获得一个人下边的所有erc交易
//http://api.etherscan.io/api?module=account&action=tokentx&address=0x27c028ea40B471CDDD780d6057101A551794aa48&startblock=0&endblock=999999999&sort=asc&apikey=A5FT8AKBXR76E9IVQRAY9DGC797R3BVEC5

web3.eth.getBlockNumber()
    .then(function (res){
        console.log(res);        
    })
    .catch(console.log);
//?page=1&offset=9&sort=asc&apikey=A5FT8AKBXR76E9IVQRAY9DGC797R3BVEC5
$.get('http://api.etherscan.io/api',{
        params: {
            module: "account",
            action: 'txlist',
            address: '0xf46f98a8F6032914921aE9CFb5aaaB5083Bd9376', 
            page: 1,
            offset: 9,
            sort: 'asc',
            apikey: 'A5FT8AKBXR76E9IVQRAY9DGC797R3BVEC5'
        }
    })
    .then(function(res){
        var data = res.data.result;
        for(var i=0; i<data.length;i++){
            parseHexData(data[i].input)
        }
    })
    .catch(function(error){
        console.log(error);        
    })
//parseHexData('0xa9059cbb000000000000000000000000b2082e52d5cc2770373541a2c5bafe295cd0a94300000000000000000000000000000000000000000000000029a2241af62c0000');
function parseHexData(hexData){
    var method = hexData.slice(0,10),
        receive = hexData.slice(34,74),
        oschHexNum = '0x'+hexData.slice(75,138),
        oschNum = parseInt(web3.utils.toBN(oschHexNum).toString()),
        oschNum = oschNum/1000000000000000000;
    console.log(oschNum);
    console.log(receive);
}
