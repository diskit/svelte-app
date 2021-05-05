const dateFormatter = Intl.DateTimeFormat('ja-JP', {year: 'numeric', month: '2-digit', day: '2-digit'})

export function formatDate(d: Date) {
  return dateFormatter.format(d);
} 