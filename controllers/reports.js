const Report = require('../models/Reports');

const data = [
    {
        date: '2021-11-08, 22:00:00',
        urine: true,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-08, 22:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-09, 00:30:00',
        urine: false,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-09, 07:15:00',
        urine: false,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-09, 07:50:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-09, 10:30:00',
        urine: true,
        stools: false,
        feeding: false
    },
    {
        date: '2021-11-09, 11:15:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-09, 14:45:00',
        urine: false,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-09, 17:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-09, 20:00:00',
        urine: false,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-09, 23:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-10, 01:30:00',
        urine: false,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-10, 04:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-10, 08:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-10, 12:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-10, 15:20:00',
        urine: false,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-10, 18:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-10, 21:00:00',
        urine: false,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-11, 01:30:00',
        urine: false,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-11, 03:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 06:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-11, 08:10:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 09:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 10:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 10:45:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 12:20:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 14:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 16:20:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 18:10:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 18:45:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 20:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 20:40:00',
        urine: true,
        stools: false,
        feeding: false
    },
    {
        date: '2021-11-11, 22:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-11, 23:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-12, 03:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-12, 07:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-12, 09:20:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-12, 13:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-12, 15:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-12, 17:30:00',
        urine: true,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-12, 17:45:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-12, 18:45:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-12, 21:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-12, 22:30:00',
        urine: false,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-13, 02:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 05:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 07:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-13, 11:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 11:45:00',
        urine: true,
        stools: true,
        feeding: false
    },
    {
        date: '2021-11-13, 12:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 15:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 17:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-13, 19:50:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-13, 21:40:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-14, 00:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 03:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-14, 07:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-14, 09:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 11:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 11:50:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 14:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-14, 15:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 18:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 20:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 21:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 22:15:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-14, 23:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-15, 01:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 04:30:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 08:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 09:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 11:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-15, 13:15:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 14:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 15:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-15, 18:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 20:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-15, 21:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-15, 22:40:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 00:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-16, 04:00:00',
        urine: true,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 07:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 09:45:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-16, 10:40:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 12:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 13:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-16, 14:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 15:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 16:20:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 17:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-16, 19:50:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 21:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-16, 22:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-16, 23:10:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 00:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 01:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 02:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 03:00:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-17, 08:30:00',
        urine: true,
        stools: true,
        feeding: true
    },
    {
        date: '2021-11-17, 10:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 12:00:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 13:30:00',
        urine: false,
        stools: false,
        feeding: true
    },
    {
        date: '2021-11-17, 17:15:00',
        urine: true,
        stools: false,
        feeding: true
    },
];
const clearDataBase = () => {
    Report.deleteMany({})
        .then(() => {
            data.forEach(elt => {
                let report = new Report({ ...elt })
                report.save();
            })
        })
        .catch(error => console.log('error :', error))
};


exports.getReports = (req, res, next) => {
    Report.find()
        .sort([
            ['date', -1]
        ])
        .then(reports => {
            res.status(200).json({ reports });
        })
        .catch(error => res.status(400).json({ message: 'Aucun rapport trouvé.' }));
};

exports.addReport = (req, res, next) => {
    (new Report({ ...req.body })).save()
        .then(report => {
            res.status(201).json({ message: 'Rapport créé.', report })
        })
        .catch(error => res.status(500).json({ error }));
};

exports.updateReport = (req, res, next) => {
    Report.updateOne({ _id: req.params.id }, { ...req.body.report, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Rapport modifié.' }))
        .catch(error => { res.status(400).json({ error }) })
};

exports.deleteReport = (req, res, next) => {
    Report.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Rapport supprimé.' }))
        .catch(error => { res.status(400).json({ error }) });
}