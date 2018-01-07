## header for angular
```html
<div class="header">
    <header-container>
        <span right>确定</span>
        <span left>取消</span>
        <div>标题</div>
    </header-container>
</div>
<div class="header-tabs">
    <header-tabs [items]="tabs">
        <ng-template #ref let-item>
            {{item|json}}
        </ng-template>
        更多
    </header-tabs>
</div>

<a class="weui-btn weui-btn_primary" (click)="showHeader()">header show</a>
<a class="weui-btn weui-btn_primary" (click)="hideHeader()">header hide</a>

<a class="weui-btn weui-btn_primary" (click)="showHeaderTabs()">header tabs show</a>
<a class="weui-btn weui-btn_primary" (click)="hideHeaderTabs()">header tabs hide</a>

<footer></footer>
```