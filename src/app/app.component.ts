import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private id = 2;
  private type = 1;

  users: Array<any> = [
    {
      'id': 0,
      'name':  'Hugh',
      'sex': 'Male',
      'mobile' : '15900000000',
      'email': 'hugh@qq.com'
    },
      {
      'id': 1,
      'name': 'Hugh1',
      'sex': 'Male',
      'mobile': '15900000002',
      'email': 'hugh@qq.com'
    },
    {
      'id' : 2,
      'name': 'Hugh2',
      'sex': 'Male',
      'mobile': '15900000003',
      'email': 'hugh@qq.com'
    }
  ];
deleteLast() {
  this.users.pop();
}
saveNewUser() {

  this.users.push(   {
      'id': this.id++,
      'name': 'Hugh' + this.id,
      'sex': 'Male',
      'mobile': '15900000001' ,
      'email': 'hugh@qq.com'
    }
  );
}
   compareAsccending(a, b) {
       return (a.id - b.id);
  }
  compareDesccending(a, b) {
       return (b.id - a.id);
  }
  compareRandom(a, b) {
       return ((b.id + 1) * Math.random() - (a.id + 1) * Math.random());
  }

  sortByAsccending() {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(this.compareAsccending);
  }
  sortByDesccending() {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.users.sort(this.compareDesccending);
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
    this.users.sort(this.compareRandom);
  }
}
