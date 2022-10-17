const skyTransform = (code: string) => {
  switch (code) {
    case '1':
      return '맑음';
    case '2':
      return '구름조금';
    case '3':
      return '구름많음';
    default:
      return '흐림';
  }
};

const rainTransform = (code: string) => {
  switch (code) {
    case '0':
      return '없음';
    case '1':
      return '비';
    case '2':
      return '비/눈';
    case '3':
      return '눈';
    case '4':
      return '소나기';
  }
};
