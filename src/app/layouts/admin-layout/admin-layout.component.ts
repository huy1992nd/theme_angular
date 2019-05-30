import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
declare var $: any;
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor( public location: Location, private router: Router) {}

  ngOnInit() {
      const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

    //   if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
    //       // if we are on windows OS we activate the perfectScrollbar function

    //       document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
    //   } else {
    //       document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
    //   }
    //   const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    //   const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

    //   this.location.subscribe((ev:PopStateEvent) => {
    //       this.lastPoppedUrl = ev.url;
    //   });
    //    this.router.events.subscribe((event:any) => {
    //       if (event instanceof NavigationStart) {
    //          if (event.url != this.lastPoppedUrl)
    //              this.yScrollStack.push(window.scrollY);
    //      } else if (event instanceof NavigationEnd) {
    //          if (event.url == this.lastPoppedUrl) {
    //              this.lastPoppedUrl = undefined;
    //              window.scrollTo(0, this.yScrollStack.pop());
    //          } else
    //              window.scrollTo(0, 0);
    //      }
    //   });
    //   this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //        elemMainPanel.scrollTop = 0;
    //        elemSidebar.scrollTop = 0;
    //   });
    //   if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
    //       let ps = new PerfectScrollbar(elemMainPanel);
    //       ps = new PerfectScrollbar(elemSidebar);
    //   }
  }
  ngAfterViewInit() {
      this.loadScript();
    //   this.runOnRouteChange();
  }

  loadScript(){
    // $.getScript('./assets/theme/plugins/jquery/jquery.min.js');
    //$.getScript('./assets/theme/plugins/bootstrap/js/bootstrap.js');
    //$.getScript('./assets/theme/plugins/bootstrap-select/js/bootstrap-select.js');

    // $.getScript('./assets/theme/plugins/jquery-slimscroll/jquery.slimscroll.js');
    // $.getScript('./assets/theme/plugins/node-waves/waves.js');
    // $.getScript('./assets/theme/plugins/jquery-countto/jquery.countTo.js');

    // $.getScript('./assets/theme/plugins/raphael/raphael.min.js');
    // $.getScript('./assets/theme/plugins/morrisjs/morris.js');

    $.getScript('./assets/theme/plugins/chartjs/Chart.bundle.js');
    $.getScript('./assets/theme/plugins/flot-charts/jquery.flot.js');
    $.getScript('./assets/theme/plugins/flot-charts/jquery.flot.resize.js');
    $.getScript('./assets/theme/plugins/flot-charts/jquery.flot.pie.js');
    $.getScript('./assets/theme/plugins/flot-charts/jquery.flot.categories.js');
    $.getScript('./assets/theme/plugins/flot-charts/jquery.flot.time.js');
    $.getScript('./assets/theme/plugins/jquery-sparkline/jquery.sparkline.js');
    $.getScript('./assets/theme/js/admin.js');
    $.getScript('./assets/theme/js/pages/index.js');
    $.getScript('./assets/theme/js/demo.js');
  }
  isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      const ps = new PerfectScrollbar(elemMainPanel);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }

}
