function formatDate(date: Date, format: 'yyyy-mm-dd' | 'dd-mm-yyyy', separator = '-'): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (format) {
    case 'yyyy-mm-dd':
      return `${year}${separator}${month.toString().padStart(2, '0')}${separator}${day
        .toString()
        .padStart(2, '0')}`.trim();
    case 'dd-mm-yyyy':
      return `${day.toString().padStart(2, '0')}${separator}${month
        .toString()
        .padStart(2, '0')}${separator}${year}`.trim();
  }
}

export { formatDate };
