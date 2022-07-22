import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { UserMock } from './service/user.mock';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    const userSpyObj = jasmine.createSpyObj<UserService>([
      'getUsers',
      'getUser',
      'createUser',
      'updateUser',
      'deleteUser',
      'patchUser',
    ]);
    userSpyObj.getUsers.and.returnValue(of([]));
    userSpyObj.getUser.and.returnValue(of(UserMock));
    userSpyObj.createUser.and.returnValue(of());
    userSpyObj.updateUser.and.returnValue(of());
    userSpyObj.deleteUser.and.returnValue(of());
    userSpyObj.patchUser.and.returnValue(of());

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: UserService, useValue: userSpyObj }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'http'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('http');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'http app is running!'
    );
  });
});
