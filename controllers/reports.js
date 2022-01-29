const Report = require('../models/Reports');

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