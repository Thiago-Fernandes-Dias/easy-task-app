import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskComponent,
    NewTaskComponent,
    TasksComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [FormsModule, BrowserModule, SharedModule]
})
export class AppModule {

}