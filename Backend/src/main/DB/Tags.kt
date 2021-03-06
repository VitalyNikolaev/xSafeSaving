package DB

import com.mongodb.client.model.Filters
import org.bson.Document

/**
 * Created by nikolaev on 29.01.17.
 */
fun addTagToFile(username: String, path: String, tag: String): Boolean {
    val collection = Database.db.getCollection("files")

    val fileFromDB = collection.findOneAndUpdate(
            Filters.and(Filters.eq("username", username), Filters.eq("path", path)),
            Document("\$addToSet", Document("tags", tag)))

    return fileFromDB != null
}

fun deleteTagFromFile(username: String, path: String, tag: String): Boolean {
    val collection = Database.db.getCollection("files")

    val fileFromDB = collection.findOneAndUpdate(
            Filters.and(Filters.eq("username", username), Filters.eq("path", path)),
            Document("\$pop", Document("tags", tag)))

    return fileFromDB != null
}
