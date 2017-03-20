var screenWidth = screen.width;
var screenHeight = screen.height;

var trees_ggyhy =
[{    "num":1,
      "significance":true,
      "family":"柏科",
      "genus":"刺柏属",
      "species":"圆柏",
      "name":"桧柏王",
      "center":"116.396627,39.921965",
      "age":600,
      "story":"此古柏与故宫同龄，故有故宫第一柏之称。\n基部隆起处似一尊趺坐的大肚罗汉，人称“疙瘩柏”或“大肚罗汉柏”。\n枝干形成“高阁倚紫垣，翠柏映延晖”的绝妙景观。",
      "pic":""
  },{ "num":2,
      "significance":false,
      "family":"柏科",
      "genus":"刺柏属",
      "species":"圆柏",
      "name":"连理柏",
      "center":"116.396874,39.921327",
      "age":270,
      "story":"为两株圆柏共生而成，交点恰位于“龙脉”之处。被视作国泰民安的祥瑞之兆。\n坊间流传连理树象征生死与共，专一不二的爱情。\n为花匠精心长期定向培育长成，足见明清两代园艺技术的高超。",
      "pic":""
  }];

function addMarkers (map,treesArray){
    var markers = [];
    for(var i = 0,x = treesArray.length; i < x; i += 1){
    if (treesArray[i].significance === true){
        var icon = new AMap.Icon({
          image: 'http://vdata.amap.com/icons/b18/1/2.png',
          size: new AMap.Size(24, 24)
        });
        var marker = new AMap.Marker({
          icon: icon,
          position: treesArray[i].center.split(','),
          title: treesArray[i].name,
        });
        marker.setMap(map);
        var content = [];
        var title =($('<p>'+treesArray[i].name+'</p>'),{class:'s-info-title'});
        content.push($('<p>'+treesArray[i].age+'</p>'),{'class':'s-info-age'});
        content.push($('<p>'+treesArray[i].family+treesArray[i].genus+treesArray[i].species+'</p>'),{'class':'s-info-details'});
        content.push($('<img>'),{'src':treesArray[i].pic,'class':'s-info-img'});
        content.push($('<p>'+treesArray[i].story+'</p>'),{'class':'s-info-story'});
        var infoWindow = new AMap.InfoWindow({
              isCustom: true,
              content: createInfoWindow(title, content.join("<br/>"),map),
              offset: new AMap.Pixel(16, -45)
          });
          AMap.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker.getPosition());
          });
      }else{
        var marker = new AMap.Marker({
            position:treesArray[i].center.split(','),
            title: treesArray[i].name,
          });
          marker.setMap(map);
        var content = [];
        var title = $('<p>'+treesArray[i].name+'</p>',{'class':'i-info-title'});
          content.push($('<p>'+treesArray[i].age+'</p>'),{'class':'i-info-age'});
          content.push($('<p>'+treesArray[i].family+treesArray[i].genus+treesArray[i].species+'</p>'),{'class':'i-info-details'});
        var infoWindow = new AMap.InfoWindow({
                 isCustom: true,
                 content: createInfoWindow(title, content.join("<br/>"),map),
                 offset: new AMap.Pixel(16, -45)
             });
           AMap.event.addListener(marker, 'click', function() {
               infoWindow.open(map, marker.getPosition());
        });
      }
      markers.push(marker);
  }
}

function createInfoWindow(title, content,map) {
     var info = document.createElement("div");
     info.className = "info";

     var top = document.createElement("div");
     var titleD = document.createElement("div");
     var closeX = document.createElement("img");
     top.className = "info-top";
     titleD.innerHTML = title;
     closeX.src = "http://webapi.amap.com/images/close2.gif";
     closeX.onclick = closeInfoWindow(map);

     top.appendChild(titleD);
     top.appendChild(closeX);
     info.appendChild(top);

     // 定义中部内容
     var middle = document.createElement("div");
     middle.className = "info-middle";
     middle.style.backgroundColor = 'white';
     middle.innerHTML = content;
     info.appendChild(middle);

     var bottom = document.createElement("div");
     bottom.className = "info-bottom";
     bottom.style.position = 'relative';
     bottom.style.top = '0px';
     bottom.style.margin = '0 auto';
     var sharp = document.createElement("img");
     sharp.src = "http://webapi.amap.com/images/sharp.png";
     bottom.appendChild(sharp);
     info.appendChild(bottom);
     return info;
 }

 function closeInfoWindow(map){
     map.clearInfoWindow();
   }


$(document).ready(function(){

  $('#ggyhy').on('click',function(){
    var defaultLayer = new AMap.TileLayer();
    var buildingLayer = new AMap.Buildings();
    var map_ggyhy = new AMap.Map(document.getElementById('map'),{
              resizeEnable: true,
              zoom: 18,
              layers:[defaultLayer,buildingLayer],
              mapStyle:'fresh',
              center:[116.39682,39.921459]
              });
   addMarkers(map_ggyhy,trees_ggyhy);
  });
  /*
  $('#bhgy').on('click',function(){
    addMap([116.38763,39.931493]);
  });
  $('#dt').on('click',function(){
    addMap([116.414867,39.953679]);
  });
  $('#yhy').on('click',function(){
    addMap([116.274153,39.999342]);
  });
  $('#jsgy').on('click',function(){
    addMap([116.396776,39.925847]);
  });
  $('#rt').on('click',function(){
    addMap([116.443803,39.915537]);
  });
  $('#ttgy').on('click',function(){
    addMap([116.410886,39.881949]);
  });
  $('#ymy').on('click',function(){
    addMap([116.303564,40.007919]);
  });
  $('#zsgy').on('click',function(){
    addMap([116.394353,39.910719]);
  });
*/
});
