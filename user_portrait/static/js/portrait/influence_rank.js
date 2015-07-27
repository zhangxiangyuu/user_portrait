function Search_weibo_total(url, div){
  that = this;
  this.ajax_method = 'GET';
  this.url = url;
  this.div = div;
}

Search_weibo_total.prototype = {
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

  Draw_table: function(data){
    //console.log(data);
    var div = that.div;
    //console.log(div);
    $(div).empty();
    var user_url;
    //console.log(user_url);
    html = '';
    html += '<table id="total_table" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>排名</th><th>头像</th><th>用户ID</th><th>昵称</th><th>影响力</th><th>入库状态</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = 'http://weibo.com/u/';
      user_url = user_url + item[i][2];
      html += '<tr>';
      html += '<td class="center">'+ item[i][0] +'</td>';
      html += '<td class="center">'+ item[i][1] +'</td>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i][2] +'</td>';
      html += '<td class="center">'+ item[i][3] +'</td>';
      html += '<td class="center">'+ item[i][4] +'</td>';
      html += '<td class="center">'+ item[i][5] +'</td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
  },
  Re_Draw_table: function(data){
    //console.log(data);
    var div = that.div;
    //console.log(div);
    $(div).empty();
    var user_url;
    //console.log(user_url);
    html = '';
    html += '<table id="total_table" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>排名</th><th>头像</th><th>用户ID</th><th>昵称</th><th>影响力</th><th>入库状态</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = 'http://weibo.com/u/';
      user_url = user_url + item[i][2];
      html += '<tr>';
      html += '<td class="center">'+ item[i][0] +'</td>';
      html += '<td class="center">'+ item[i][1] +'</td>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i][2] +'</td>';
      html += '<td class="center">'+ item[i][3] +'</td>';
      html += '<td class="center">'+ item[i][4] +'</td>';
      html += '<td class="center">'+ item[i][5] +'</td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
    $('#total_table').dataTable({
        "sDom": "<'row'<'col-md-6'l ><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ 每页"
        }
    });
  }
}

function Search_weibo_domain(url, div){
  that = this;
  this.ajax_method = 'GET';
  this.url = url;
  this.div = div;
}

Search_weibo_domain.prototype = {
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

  Draw_table: function(data){
    //console.log(data);
    var div = that.div;
    //console.log(div);
    $(div).empty();
    var user_url;
    //console.log(user_url);
    html = '';
    html += '<table id="domain_table" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>排名</th><th>头像</th><th>用户ID</th><th>昵称</th><th>影响力</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = 'http://weibo.com/u/';
      user_url = user_url + item[i][2];
      html += '<tr>';
      html += '<td class="center">'+ item[i][0] +'</td>';
      html += '<td class="center">'+ item[i][1] +'</td>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i][2] +'</td>';
      html += '<td class="center">'+ item[i][3] +'</td>';
      html += '<td class="center">'+ item[i][4] +'</td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
  },
  Re_Draw_table: function(data){
    //console.log(data);
    var div = that.div;
    //console.log(div);
    $(div).empty();
    var user_url;
    //console.log(user_url);
    html = '';
    html += '<table id="domain_table" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>排名</th><th>头像</th><th>用户ID</th><th>昵称</th><th>影响力</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = 'http://weibo.com/u/';
      user_url = user_url + item[i][2];
      html += '<tr>';
      html += '<td class="center">'+ item[i][0] +'</td>';
      html += '<td class="center">'+ item[i][1] +'</td>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i][2] +'</td>';
      html += '<td class="center">'+ item[i][3] +'</td>';
      html += '<td class="center">'+ item[i][4] +'</td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
    $('#domain_table').dataTable({
        "sDom": "<'row'<'col-md-6'l ><'col-md-6'f>r>t<'row'<'col-md-12'i><'col-md-12 center-block'p>>",
        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ 每页"
        }
    });
  }
}

function Search_weibo_change(url, div){
  that = this;
  this.ajax_method = 'GET';
  this.url = url;
  this.div = div;
}

Search_weibo_change.prototype = {
  call_sync_ajax_request:function(url, method, callback){
    $.ajax({
      url: url,
      type: method,
      dataType: 'json',
      async: false,
      success:callback
    });
  },

  Draw_table: function(data){
    //console.log(data);
    var div = that.div;
    //console.log(div);
    $(div).empty();
    var user_url;
    //console.log(user_url);
    html = '';
    html += '<table id="change_table" class="table table-striped table-bordered bootstrap-datatable datatable responsive">';
    html += '<thead><tr><th>排名</th><th>头像</th><th>用户ID</th><th>昵称</th><th>影响力变动</th></tr></thead>';
    var item = data;
    html += '<tbody>';
    for(var i in item){
      user_url = 'http://weibo.com/u/';
      user_url = user_url + item[i][2];
      html += '<tr>';
      html += '<td class="center">'+ item[i][0] +'</td>';
      html += '<td class="center">'+ item[i][1] +'</td>';
      html += '<td class="center"><a href='+ user_url+ '>'+ item[i][2] +'</td>';
      html += '<td class="center">'+ item[i][3] +'</td>';
      html += '<td class="center">'+ item[i][4] +'</td>';
      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';
    $(div).append(html);
  }
}

var url_total = '/influence_application/all_active_rank/?date=' + $("#total_date_select").val();
draw_table_total = new Search_weibo_total(url_total, '#total_rank');
draw_table_total.call_sync_ajax_request(url_total, draw_table_total.ajax_method, draw_table_total.Draw_table);

var url_domain = '/influence_application/domain_rank/?date=' + $("#domain_date_select").val();
draw_table_domain = new Search_weibo_domain(url_domain, '#domain_rank');
draw_table_domain.call_sync_ajax_request(url_domain, draw_table_domain.ajax_method, draw_table_domain.Draw_table);

var url_change = '/influence_application/portrait_user_in_vary/';
draw_table_change = new Search_weibo_change(url_change, '#change_rank');
draw_table_change.call_sync_ajax_request(url_change, draw_table_change.ajax_method, draw_table_change.Draw_table);

$("#range").empty();
var range_html = '';
range_html += '<input type="radio" name="range_select" checked value="0" /> 全网    ';
range_html += '<input type="radio" name="range_select" value="1" /> 人物库';
$("#range").append(range_html);

$("#domain").empty();
var domain_html = '';
domain_html += '<select id="domain_select">';
domain_html += '<option value="0" selected="selected">文化</option>';
domain_html += '<option value="1">教育</option>';
domain_html += '<option value="2">娱乐</option>';
domain_html += '<option value="3">时尚</option>';
domain_html += '<option value="4">财经</option>';
domain_html += '<option value="5">媒体</option>';
domain_html += '<option value="6">体育</option>';
domain_html += '<option value="7">科技</option>';
domain_html += '</select>';
$("#domain").append(domain_html);

$('input[name="range_select"]').click(function(){
  var select_range = $('input[name="range_select"]:checked').val();
  var url_total_new = '';
  var select_total_date = $("#total_date_select").val()
  if(select_range==0)
    url_total_new = '/influence_application/all_active_rank/?date=' + select_total_date;
  else
    url_total_new = '/influence_application/portrait_user_in_active/?date=' + select_total_date;
  console.log(url_total_new);
  draw_table_total_new = new Search_weibo_total(url_total_new, '#total_rank');
  draw_table_total_new.call_sync_ajax_request(url_total_new, draw_table_total_new.ajax_method, draw_table_total_new.Re_Draw_table);
});

$('#domain_button').click(function(){
  var url_domain_new = '/influence_application/domain_rank/?date=' + $("#domain_date_select").val() + '&domain=' + $("#domain_select").val();
  draw_table_domain_new = new Search_weibo_domain(url_domain_new, '#domain_rank');
  draw_table_domain_new.call_sync_ajax_request(url_domain_new, draw_table_domain_new.ajax_method, draw_table_domain_new.Re_Draw_table);
});

var tomorrow = new Date(2013,8,8);
var now_date = new Date(tomorrow-24*60*60*1000);
var now = now_date.getFullYear()+"-"+((now_date.getMonth()+1)<10?"0":"")+(now_date.getMonth()+1)+"-"+((now_date.getDate())<10?"0":"")+(now_date.getDate());

var total_date = [];
for(var i=0;i<7;i++){
  var today = new Date(tomorrow-24*60*60*1000*(7-i));
  total_date[i] = today.getFullYear()+"-"+((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)+"-"+((today.getDate())<10?"0":"")+(today.getDate());
}
$("#total_date").empty();
var total_date_html = '';
total_date_html += '<select id="total_date_select">';
total_date_html += '<option value="' + total_date[0] + '">' + total_date[0] + '</option>';
total_date_html += '<option value="' + total_date[1] + '">' + total_date[1] + '</option>';
total_date_html += '<option value="' + total_date[2] + '">' + total_date[2] + '</option>';
total_date_html += '<option value="' + total_date[3] + '">' + total_date[3] + '</option>';
total_date_html += '<option value="' + total_date[4] + '">' + total_date[4] + '</option>';
total_date_html += '<option value="' + total_date[5] + '">' + total_date[5] + '</option>';
total_date_html += '<option value="' + total_date[6] + '" selected="selected">' + total_date[6] + '</option>';
total_date_html += '</select>';
$("#total_date").append(total_date_html);

var domain_date = [];
for(var i=0;i<7;i++){
  var today = new Date(tomorrow-24*60*60*1000*(7-i));
  domain_date[i] = today.getFullYear()+"-"+((today.getMonth()+1)<10?"0":"")+(today.getMonth()+1)+"-"+((today.getDate())<10?"0":"")+(today.getDate());
}
$("#domain_date").empty();
var domain_date_html = '';
domain_date_html += '<select id="domain_date_select">';
domain_date_html += '<option value="' + domain_date[0] + '">' + domain_date[0] + '</option>';
domain_date_html += '<option value="' + domain_date[1] + '">' + domain_date[1] + '</option>';
domain_date_html += '<option value="' + domain_date[2] + '">' + domain_date[2] + '</option>';
domain_date_html += '<option value="' + domain_date[3] + '">' + domain_date[3] + '</option>';
domain_date_html += '<option value="' + domain_date[4] + '">' + domain_date[4] + '</option>';
domain_date_html += '<option value="' + domain_date[5] + '">' + domain_date[5] + '</option>';
domain_date_html += '<option value="' + domain_date[6] + '" selected="selected">' + domain_date[6] + '</option>';
domain_date_html += '</select>';
$("#domain_date").append(domain_date_html);

$('#total_date_button').click(function(){
  //console.log($("#total_date_select").val());
  var url_total_new = '/influence_application/all_active_rank/?date=' + $("#total_date_select").val();
  draw_table_total_new = new Search_weibo_total(url_total_new, '#total_rank');
  draw_table_total_new.call_sync_ajax_request(url_total_new, draw_table_total_new.ajax_method, draw_table_total_new.Re_Draw_table);
});

option = {
    title : {
        text: '用户影响力得分分布',
        subtext: '来自微博'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['全网','画像库']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['0','200','400','600','800','1000','1200','1400','1600','1800','2000']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'全网',
            type:'bar',
            data:[100, 200, 400, 500, 800, 1000, 700, 550, 300, 150],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'画像库',
            type:'bar',
            data:[10, 20, 40, 50, 80, 100, 70, 55, 30, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

var rank_distribution = echarts.init(document.getElementById('rank_distribution'));
rank_distribution.setOption(option);