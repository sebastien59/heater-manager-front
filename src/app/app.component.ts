import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ToggleMenu() {
    console.log('test');
    if ($('body').hasClass('nav-md')) {
      $('#sidebar-menu').find('li.active ul').hide();
      $('#sidebar-menu').find('li.active').addClass('active-sm').removeClass('active');
    } else {
      $('#sidebar-menu').find('li.active-sm ul').show();
      $('#sidebar-menu').find('li.active-sm').addClass('active').removeClass('active-sm');
    }

    $('body').toggleClass('nav-md nav-sm');
  }
}
