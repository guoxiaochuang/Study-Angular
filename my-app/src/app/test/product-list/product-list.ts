import { Component } from "@angular/core";

@Component({
    selector : 'product-list',
    template : `<h3>商品列表</h3>
        <p title="{{empName}}">员工姓名：{{empName}}</p>
        <p [title]="empAge">员工年龄：{{empAge}}</p>
        <button (click)="deleteEmp()">删除</button>
    `
})


export class ProductList{
    empName = '张胜男';
    empAge = 22;
    deleteEmp(){
        console.log('del........' );
    }
}
