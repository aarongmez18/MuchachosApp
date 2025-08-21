import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'groups', loadComponent: () => import('../groups/groups.page').then(m => m.GroupsPage) },
      { path: 'calendar', loadComponent: () => import('../calendar/calendar.page').then(m => m.CalendarPage) },
      { path: 'notifications', loadComponent: () => import('../notifications/notifications.page').then(m => m.NotificationsPage) },
      { path: 'profile', loadComponent: () => import('../profile/profile.page').then(m => m.ProfilePage) },
      { path: '', redirectTo: 'groups', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
