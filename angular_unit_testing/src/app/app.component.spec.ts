import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeAll(()=>{
    console.log('Before All');  // 1
  })
  afterAll(()=>{
    console.log('After All') // 1
  })
  beforeEach(async () => { // n 
    console.log('Before Each')
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });
  afterEach(async () => {
    console.log('After Each')
  });

  it('should create the app', () => {
    console.log('It-1')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular_unit_testing' title`, () => {
    console.log('It-2')
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular_unit_testing');
  });

  it('should render title', () => {
    console.log('It-3')
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_unit_testing');
  });
  it('should test add function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 3)).toBe(5);
    expect(app.add(2, -3)).toBe(-1);
    expect(app.add(-2, -3)).toBe(-5);
  })
  it('should verify sumOfDigit function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sumOfDigit(125)).toBe(8);
  })
  it('should verify isEven function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isEven(2)).toBe('even')
    expect(app.isEven(3)).toBe('odd')
  })
  it('should verify addCar function', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.cars).toBeDefined();
    expect(app.cars).toEqual(['Tata', 'Honda']);
    expect(app.cars.length).toEqual(2);
    expect(app.cars).toContain('Tata');
    expect(app.cars).not.toContain('BMW');
    app.addNewCar('Maruti');
    expect(app.cars.length).toBe(3);
    expect(app.cars).toContain('Maruti');
    expect(app.cars).not.toContain('BMW');
  })
});
