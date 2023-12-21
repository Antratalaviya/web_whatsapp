import mongoose from 'mongoose';
import grid from 'gridfs-stream';

export let gridFsBucket, gfs;

const conn = mongoose.connections[0];
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'fs' });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})

const url = `http://localhost:8080/api/v1/user`

export const uploadFile = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json('File not Found');
        }
        const imageUrl = `${url}/file/${req.file.filename}`
        return res.status(200).json(imageUrl);
    } catch (error) {
        return res.status(500).json({ message: `uploadfile ${error.message}` });
    }
}

export const getImage = async (req, res) => {
    try {
        const paramFile = req.params.filename;
        const file = await gfs.files.findOne({ filename: paramFile });
        if (file) {
            gridFsBucket.openDownloadStreamByName(paramFile).pipe(res);
        } else {
            res.status(404).json('File not Found');
        }
    } catch (error) {
        return res.status(500).json({ message: `getImage ${error.message}` })
    }
}