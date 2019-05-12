import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

import { Subscription } from 'rxjs/Subscription';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';
import { AgmCoreModule } from '@agm/core';
import { ThemePalette } from '@angular/material/core';

export interface User {
  email: any;
  name: string;
  message: string;
  timestamp: Date;
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false
})


export class FeaturesComponent {

  public user: User = {
    email: '',
    name: '',
    message: '',
    timestamp: new Date
  };
  public first_feature = 'GELÄNDER';
  public second_feature = 'TORE';
  public third_feature = 'ZAUN';
  space$;
  sub$: Subscription;


  constructor(public snackBar: MatSnackBar, public translate: TranslateService, public af: AngularFireDatabase) { }
  /**
   * @author Ivelin Ivanov
   * @param form {}
   * @desc function to submit the form to google cloudbase database
   */

  public onSubmit(form: NgForm) {
    try {
        this.af.database.ref('/messages/' + form.value.userData.name).set({
          name: form.value.userData.name,
          email: form.value.userData.email,
          message : form.value.userData.message,
          timestamp: new Date().toString()
        });
        this.snackBar.open('Danke für Ihre Nachricht !', '', {
          duration: 3000
        });
        form.reset();
    } catch (e) {
        console.error(e);
    }
  }
}
