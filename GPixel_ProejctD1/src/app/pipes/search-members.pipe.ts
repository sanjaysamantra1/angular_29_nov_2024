import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMembers',
  standalone: true
})
export class SearchMembersPipe implements PipeTransform {

  transform(members: any[], searchText: string): any[] {
    console.log(searchText); 
    if (!searchText) { return members; } 
    searchText = searchText.toLowerCase();
    return members.filter(member => member.name.toLowerCase().includes(searchText) || 
                                    member.gender.toLowerCase().includes(searchText) || 
                                    member.sal.toString().includes(searchText) ||
                                    member.memberId.toString().includes(searchText));
}
}