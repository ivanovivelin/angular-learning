import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import { AgmCoreModule } from '@agm/core';

export interface User {
  email: any;
  name: string;
  message: string;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
})


export class FeaturesComponent {

  public user: User = {
    email: '',
    name: '',
    message: ''
  };
  public first_feature = 'GELÄNDER';
  public second_feature = 'TORE';
  public third_feature = 'ZAUN';


  constructor(public snackBar: MatSnackBar, public translate: TranslateService, public af: AngularFireDatabase) { }

  /**
   * @author Ivelin Ivanov
   * @param form {}
   * @desc function to submit the form to google cloudbase database
   */

  public onSubmit(form: NgForm) {
    try {
      this.af.database.ref('/messages/' + form.value.userData.name).set({
        username: form.value.userData.email,
        email: form.value.userData.email,
        profile_picture : form.value.userData.message
      });
        this.snackBar.open('Thank you for contacting us !', '', {
          duration: 3000
        });
        form.reset();
    } catch (e) {
      console.error(e);
    }
  }
}
