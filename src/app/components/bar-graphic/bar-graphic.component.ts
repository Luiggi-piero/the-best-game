import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bar-graphic',
  templateUrl: './bar-graphic.component.html',
  styleUrls: ['./bar-graphic.component.css'],
})
export class BarGraphicComponent implements OnDestroy {
  results: any[] = [
    {
      name: 'Game 1',
      value: 30,
    },
    {
      name: 'Game 2',
      value: 70,
    },
    {
      name: 'Game 3',
      value: 20,
    },
    {
      name: 'Game 4',
      value: 10,
    },
    {
      name: 'Game 5',
      value: 60,
    },
  ];

  // Dimensiones de la gráfica
  // view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';
  colorScheme = 'flame';

  // intervalo: NodeJS.Timer;

  constructor() {
    // this.intervalo = setInterval(() => {
    //   const newRestults = [...this.results];
    //   for (let i in newRestults) {
    //     newRestults[i].value = Math.round(Math.random() * 200);
    //   }
    //   this.results = [...newRestults];
    // }, 1500);
  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }

  onSelect(event: any) {
    console.log(event);
  }
}
// , write: if false