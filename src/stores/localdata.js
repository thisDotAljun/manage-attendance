import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLocalDataStore = defineStore('localdata', () => {
  const data = ref([
    {
      employee_details: {
        name: 'aguas, ivy',
        id: 1234,
      },
      time_stamp: {
        date: '01/27/2024',
        time: '01:34 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 5678,
      },
      time_stamp: {
        date: '01/27/2024',
        time: '03:48 PM'
      },
      status: 'out',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    {
      employee_details: {
        name: 'mondragon',
        id: 9012,
      },
      time_stamp: {
        date: '01/28/2024',
        time: '04:02 PM'
      },
      status: 'in',
      log_detail: 'app',
      location_detail: {
        location: '-',
        note: 'notes'
      },
      project_details: {
        project_name: 'manage attendance system',
        project_abbrev: 'mns'
      },
      log_status: 'active'
    },
    // {
    //   employee_details: {
    //     name: 'mondragon',
    //     id: 9012,
    //   },
    //   time_stamp: {
    //     date: '01/28/2024',
    //     time: '04:02 PM'
    //   },
    //   status: 'in',
    //   log_detail: 'app',
    //   location_detail: {
    //     location: '-',
    //     note: 'notes'
    //   },
    //   project_details: {
    //     project_name: 'manage attendance system',
    //     project_abbrev: 'mns'
    //   },
    //   log_status: 'active'
    // },
  ]);

  const filterData = ref([
    {
      company_id: 1,
      company_name: 'sprout solutions',
      department: [
        { name: 'engineering', dept_id: 12 },
        { name: 'it dept', dept_id: 13 }
      ],
      location: [],
      employee: [
        { name: 'aguas, ivy', emp_id: 1234, dept_id: 12 },
        { name: 'mondragon', emp_id: 9012, dept_id: 13 },
      ]
    },
    {
      company_id: 2,
      company_name: 'dummy company name',
      department: [
        { name: 'hr dept', dept_id: 123 },
        { name: 'qa dept', dept_id: 45645 }
      ],
      location: [
        { name: 'qc', location_id: 1 }
      ],
      employee: [
        { name: 'juan tam', emp_id: 567857, dept_id: 123 },
        { name: 'pedro pen', emp_id: 13345556, dept_id: 45645 },
      ]
    },
  ]);

  return { data, filterData }
})
