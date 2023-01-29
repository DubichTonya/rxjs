export const html = `
    <div class="row">
    <div class="col-4">
      <button type="button" class="btn btn-danger me-2" #redBtn>Red</button>
      <button type="button" class="btn btn-dark" #blackBtn>Black</button>
    </div>
    <div class="col-8 d--inline-flex aling-items-center">
      <span class="me-2">
        Red: <span #redTotal>{{ info.redTotal }}</span>
      </span>
      <span class="me-2">
        Black: <span #blackTotal>{{ info.blackTotal }}</span>
      </span>
      <span class="me-2">
        Total: <span #total>{{ info.total }}</span>
      </span>
    </div>
  </div>
  `;

export const js = `
    /** Получаем доступ к элементам */
  @ViewChild('redBtn')
  redBtn!: ElementRef<HTMLElement>;
  @ViewChild('blackBtn')
  blackBtn!: ElementRef<HTMLElement>;

  /** Необходим для управления завершением подписки */
  private destroy$ = new Subject<void>();

  info: InfoInterface = {
    redTotal: 0,
    blackTotal: 0,
    total: 0,
  };

  ngAfterViewInit(): void {
    combineLatest(this.addOnClick$(this.redBtn), this.addOnClick$(this.blackBtn))
      .pipe(takeUntil(this.destroy$))
      .subscribe(([redCounter, blackCounter]) => {
        this.info = {
          redTotal: redCounter,
          blackTotal: blackCounter,
          total: redCounter + blackCounter,
        };
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addOnClick$(elRef: ElementRef) {
    return fromEvent(elRef.nativeElement, 'click').pipe(
      map(() => 1), // трансформирует событие клика в значение 1
      scan((acc, curr) => acc + curr, 0), // суммирует кол-во кликов
      startWith(0) // необходимо как стартовое значение для обеих кнопок. если его не использовать, то combineLatest будет ждать пока вы нажмете на обе кнопки.
    );
  }
  `;
