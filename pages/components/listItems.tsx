import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessAlarmIcons from '@mui/icons-material/AccessAlarms';
import { AdminPanelSettings, DynamicForm, EventRepeat, Newspaper,Report } from '@mui/icons-material';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Newspaper />
      </ListItemIcon>
      <ListItemText primary="科技月刊" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EventRepeat />
      </ListItemIcon>
      <ListItemText primary="行长周报" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DynamicForm />
      </ListItemIcon>
      <ListItemText primary="自定义表单" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Report />
      </ListItemIcon>
      <ListItemText primary="提报事项" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="项目管理" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="人员管理" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AdminPanelSettings />
      </ListItemIcon>
      <ListItemText primary="权限管理" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccessAlarmIcons />
      </ListItemIcon>
      <ListItemText primary="提醒事项" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="定时任务" />
    </ListItemButton>
  </React.Fragment>
);
