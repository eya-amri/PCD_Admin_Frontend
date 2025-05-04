import { Component ,ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-loginuser',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './loginuser.component.html',
  styleUrl: './loginuser.component.css'
  
})
export class LoginuserComponent {

}
