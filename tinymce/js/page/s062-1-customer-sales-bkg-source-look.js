
$(function() {

  $('div.box-header #btn-memo').click(function(){
    $('.pull-right span#span2').toggleClass('hide');
    $('.pull-right span#span1').toggleClass('hide');
  });
  
  // $("#btnSpotPrice").click(function(){
  //   $("#frmSpotPrice").fadeIn(1000);
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnPartialRefund").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").fadeIn(1000);
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnMLCPU").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").fadeIn(1000);
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnTravelWith").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").fadeIn(1000);
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnSearch").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").fadeIn(1000);
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnNB").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").fadeIn(1000);
  //   $("#frmCancelPanel").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnShowCancelPanel").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").fadeIn(1000);
  //   $("#frmCancelPanel2").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnShowSelectReferringBookingPanel").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmCancelPanel2").hide();
  //   $("#frmSelectReferringBookingPanel").fadeIn(1000);
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  // $("#btnShowKenriHoukiUpgradePanel").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmCancelPanel2").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").fadeIn(1000);
  //   $("#frmSearchTravelWidthPanel").hide();
  // });
  
  
  // $("#btnShowSearchTravelWidthPanel").click(function(){
  //   $("#frmSpotPrice").hide();
  //   $("#frmPartialRefund").hide();
  //   $("#frmMLCPU").hide();
  //   $("#frmSearchTravelWith").hide();
  //   $("#frmSearchOpServicePanel").hide();
  //   $("#frmUpdateStatusProcessPanel").hide();
  //   $("#frmCancelPanel").hide();
  //   $("#frmCancelPanel2").hide();
  //   $("#frmSelectReferringBookingPanel").hide();
  //   $("#frmKenriHoukiUpgradePanel").hide();
  //   $("#frmSearchTravelWidthPanel").fadeIn(1000);
  // });
  

  /* Tab setting */
  // $(".tab-group-wrap .btn-group-tab li .btn").click(function() {
  //   $(".tab-group-wrap .btn-group-tab li.active").removeClass("active");
  //   $(this).parent().addClass("active");
  //   $('.tab-group-wrap .tab-content-box').hide();
  //   var content_show_id = $(this).attr("data-id"); 
  //   $("#"+content_show_id).show();
  // });
  
  // Accordion has icon arrow
  $(document).on('click','#btn-memo',function(event){
    $(this).toggleClass('opened');
    $('.box-collapsee').slideToggle(200);
  });

    
  $(document).on('click', '#btnAddItemClientInfomation', function(){
    var sHTML='<tr>';
        sHTML+='<td class="text-center"><input type="checkbox" name="" value="" disabled></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control" placeholder=""</td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control" placeholder=""></td>';
        sHTML+='<td><select class="selectpicker show-tick" data-width="60px" data-container="body" id="" name=""><option value="">HNL</option></select></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control w70px" placeholder=""></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control w40px" placeholder=""></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control w50px" placeholder=""></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control w80px" placeholder=""></td>';
        sHTML+='<td><input type="text" name="" value="" id="" class="form-control w60px" placeholder=""></td>';
        
        //sHTML+='<td><input type="text" name="" value="" id="" class="form-control w130px" placeholder="MM/DD/YYYY" data-mask="99/99/999"></td>';
        //sHTML+='<td><input type="text" name="" value="" id="" class="form-control w130px" placeholder="MM/DD/YYYY" data-mask="99/99/999"></td>';
        
        sHTML+='<td><div class="input-group date datetimepicker w130px"><input type="text" class="form-control date-inputmask datetimepickerAppend1" id="" name="" value="" data-mask="99/99/999" placeholder="MM/DD/YYYY">';
        sHTML+='<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></td>';
        
        sHTML+='<td><div class="input-group date datetimepicker w130px"><input type="text" class="form-control date-inputmask datetimepickerAppend1" id="" name="" value="" data-mask="99/99/999" placeholder="MM/DD/YYYY">';
        sHTML+='<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></td>';
        
        
        sHTML+='<td class="text-center"><a href="javascript:void(0)" class="btn btn-danger btn-xs btnRemoveItemClientInfomation"><i class="fa fa-times"></i></a></td>';
        sHTML+='</tr>';
          
      //$("#tblClientInfomation > tbody").append(sHTML);
      
      $(sHTML).insertBefore('#tblClientInfomation .groupActionRow');
      
      $('.selectpicker').selectpicker('render');
      $(".datetimepicker").datetimepicker({
          format: 'MM/DD/YYYY'
      });

    });
    
    
    $(document).on('click', '.btnRemoveItemClientInfomation', function(){
        $(this).parent().parent('tr').remove();  
      });

    // Add form Flight No
    $("#lastedflight-hotel").click(function(){

      var html='<tr>';
          html+='<td class="text-center"><input type="checkbox" name="" value="" disabled></td>';
          html+='<td><input type="text" name="" value="" id="" class="form-control w60px" placeholder=""</td>';
          html+='<td><input type="text" name="" value="" id="" class="form-control w60px" placeholder=""></td>';
          //html+='<td><input type="text" name="" value="" id="" class="form-control" placeholder="MM/DD/YYYY" data-mask="99/99/999"></td>';
          
          html+='<td><div class="input-group date datetimepicker"><input type="text" class="form-control date-inputmask datetimepickerAppend2" id="" name="" value="" data-mask="99/99/999" placeholder="MM/DD/YYYY">';
          html+='<span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span></div></td>';
          
          html+='<td><select class="selectpicker show-tick" data-width="100%" data-container="body" id="" name=""><option value="">O</option></select></td>';
          html+='<td><input type="text" name="" value="" id="" class="form-control w60px" placeholder=""></td>';
          html+='<td><input type="text" name="" value-"" id="" class="form-control w80px" placeholder="HH:MM" data-mask="99:99"></td>';
          html+='<td><input type="text" name="" value-"" id="" class="form-control w60px" placeholder=""></td>';
          html+='<td><input type="text" name="" value-"" id="" class="form-control w80px" placeholder="HH:MM" data-mask="99:99"></td>';
          html+='<td class="text-center"><a href="javascript:void(0)" class="btn btn-danger btn-xs btn-del-row-lastedflight"><i class="fa fa-times"></i></a></td>';
          html+='</tr>';

      //$('.lastedflight-hotel').append(html);
      
      $(html).insertBefore('#tblLastedFlightHotel .groupActionRow');
      
      $('.selectpicker').selectpicker('render');
      $(".datetimepicker").datetimepicker({
          format: 'MM/DD/YYYY'
      });

      $('.btn-del-row-lastedflight').click(function(){
        $(this).parent().parent().remove();
      });
    });
    
    
    
    // Delete an existing line
    $('.btn-del-row-lastedflight').click(function(){
      $(this).parent().parent().hide();
    });

    /* Tooltip show label text */
    // $('.qTip-Title-Tour-Name').qtip({ 
    //   content: {
    //       text: '<div>T Q OAHU6 WKK4 D9BA6NH1BY</div>'
    //   },
    //   position : {
    //     my: 'bottom right',
    //     at: 'bottom right',
    //     target: 'mouse',
    //     adjust: { x: -7, y: -7 }
    //   },
    //   style : { classes: 'qtip-youtube' },
    // });
    
    /* Tooltip show label text */
    $('.qTip-Tariff-Name').qtip({ 
      content: {
          text: '<div class="qtip-long-text"><p>Tariff Name<p>XXXXXXXXXXxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>'
      },
      position : {
        my: 'bottom right',
        at: 'bottom right',
        target: 'mouse',
        adjust: { x: -7, y: -7 }
      },
      style : { classes: 'qtip-youtube' },
    });
    
    /* Tooltip show label text */
    // $('.qTip-Sup-Name').qtip({ 
    //   content: {
    //       text: '<div class="qtip-long-text">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>'
    //   },
    //   position : {
    //     my: 'bottom right',
    //     at: 'bottom right',
    //     target: 'mouse',
    //     adjust: { x: -7, y: -7 }
    //   },
    //   style : { classes: 'qtip-youtube' },
    // });
    
    
    /* Tooltip show label text */
    // $('.qTip-Hotel-Name').qtip({ 
    //   content: {
    //       text: '<div class="qtip-long-text">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>'
    //   },
    //   position : {
    //     my: 'bottom left',
    //     at: 'bottom left',
    //     target: 'mouse',
    //     adjust: { x: -7, y: -7 }
    //   },
    //   style : { classes: 'qtip-youtube' },
    // });

  /* Booking CONFIRMED by Call Vendor MM/DD/YYYY HH:MM */
  $('.qTip-Call-Service-Booking').qtip({ 
    content: {
        text: '<div><p>OK By XXXXXXXXXX</p><p>Confirmation# XXXXXXXXXXXXX</p><p class="pull-right">MM/DD/YYYY HH:MM</p><p class="mt10">Recomfirm With XXXXXXXXXX</p><p>Confirmation# XXXXXXXXXXXXX</p><p class="pull-right">MM/DD/YYYY HH:MM</p></div>'
    },
    position : {
      my: 'bottom right',
      at: 'bottom right',
      target: 'mouse',
      adjust: { x: -7, y: -7 }
    },
    style : { classes: 'qtip-youtube' },
  });

  /* RMKS Sup */
  $('.qTip-RMKS-Sup').qtip({ 
    content: {
        text: '<div class="qTip-content qtip-content-btn-edit"><ul><li><p class="text-bold">For JH</p>XXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXX</li><li><p class="text-bold">For CS</p>XXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXX</li><li><p class="text-bold">For Supplier</p>XXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXX</li></ul></div>'
    },
    position : {
      my: 'bottom left',
      at: 'top left',
      target: 'mouse',
      adjust: { x: 5, y: 5 }
    },
    style : { classes: 'qtip-bootstrap' },
  });
  
});

