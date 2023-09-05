export function timeAgo(date: Date) {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - date.getTime();

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
        return years === 1 ? 'one year ago' : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? 'one month ago' : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? 'one day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? 'an hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? 'a minute ago' : `${minutes} minutes ago`;
    } else {
        return seconds <= 10 ? 'just now' : `${seconds} seconds ago`;
    }
}


export const calculatePagination = (currentPage: number, totalPages: number) => {
    const maxButtons = 8;
    const pagesArray: number[] = [];

    if (totalPages <= maxButtons) {
        for (let i = 1; i <= totalPages; i++) {
            pagesArray.push(i);
        }
    } else if (currentPage <= maxButtons - 4) {
        for (let i = 1; i <= maxButtons - 2; i++) {
            pagesArray.push(i);
        }
        pagesArray.push(0);
        pagesArray.push(totalPages);
    } else if (currentPage >= totalPages - (maxButtons - 4)) {
        pagesArray.push(1);
        pagesArray.push(0);
        for (let i = totalPages - (maxButtons - 4); i <= totalPages; i++) {
            pagesArray.push(i);
        }
    } else {
        pagesArray.push(1);
        pagesArray.push(0);
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pagesArray.push(i);
        }
        pagesArray.push(0);
        pagesArray.push(totalPages);
    }

    return pagesArray;
};